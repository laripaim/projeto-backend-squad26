const supabase = require('../supabase');

const subirImagem = async (req, res) => {
    const {nome, imagem} = req.body;

    const buffer = Buffer.from(imagem, 'base64');
    
    try {
        const {error} = await supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(nome, buffer);

        if(error) {
            return res.status(400).json(error.message);
        }

        const { publicURL, error: errorUrlPublica } = supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .getPublicUrl(nome)

        if(error) {
            return res.status(400).json(errorUrlPublica.message);
        }
        
        return res.status(200).json(publicURL);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deletarImagem = async (req, res) => {
    const {nome} = req.body;

    try {
        const { error } = await supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .remove([nome])
        if(error) {
            return res.status(400).json(error.message);
        }
        
        return res.status(200).json("A imagem foi removida com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    subirImagem,
    deletarImagem
}