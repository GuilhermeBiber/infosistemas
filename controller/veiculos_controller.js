const veiculoModel = require('../model/veiculos_model')


module.exports={ api:{
        get(req, res){
            veiculoModel.get().then((veiculoList)=>{
                res.json(veiculoList);
            })
        },
        salva(req, res){
            let veiculo = req.body;
            //Verifica se o veículo ja foi cadastrado
            veiculoModel.findByRenavam(veiculo.renavam).then(linhas =>{
                if(linhas.length > 0)
                    return res.status(400).json({erro: "Veículo já cadastrado!"});
                console.log('insere veiculo')
                veiculoModel.insert(veiculo)
                    .then(id =>{
                        veiculo.id = id[0];
                        return res.status(201).json(veiculo);
                    })
                    .catch(err =>{
                        return res.status(400).json(
                            {erro: "Favor inserir todos os campos!"})
                    })
            })
        },
        atualiza(req, res){
            let id = req.params.id,
                veiculo = req.body;
            if(veiculo === ""){
                return res.status(400).json(
                    {erro: "Não foi possível atualizar o Veículo!"})
            }

            veiculoModel.atualiza(veiculo, id)
                .then(id =>{
                    return res.json(veiculo)
                })
                .catch(erro => {
                    return res.status(400).json(
                            {erro: "Não foi possível atualizar o Veículo!"})
                })
        },
        deleta(req, res){
            let id = req.params.id;
            veiculoModel.delete(id)
                .then(id => {
                    return res.json(
                        {sucesso: "OK"})
                })
                .catch(erro => {
                    return res.status(400).json(
                        {erro: "Não foi possível remover o Veículo!"})
                })

        }
    }

};