# Rotas

## Rotas

| Rota | Description | Method | Body |
| --- | --- | --- | --- |
| users/auth | Autenticação de usuário | GET | email password |
| users/ | Criar um usuário | POST | name email password cpf |
| users/logout/:user | Logout do usuário |  |  |
| cards/ | Criar um cartão | POST | code amountTicket type idUser |
| cards/:idUser | Retorna os cartões que o usuário possue | GET |  |
| tariffs/ | Criar tarifa | POST | type amount value |
| tariffs/:typeCard | Retorna as tarifas de acordo com o tipo do cartão | GET |  |
| recharges/:idCard | Retorna o histórico de recargas de acordo com o id do cartão do usuário | GET |  |
| recharges/  | Salva uma recarga | POST | idCard amountTicket priceTotal |

---

### Default response

```json
{
	"status": "sucess" || "error",
	"data": [] || {}
}
```
