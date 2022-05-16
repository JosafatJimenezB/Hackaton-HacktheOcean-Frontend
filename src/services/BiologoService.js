import http from "../http-common"

class BiologoService{
    getAll(){
        return http.get("/biologo");
    }
}

export default new BiologoService();