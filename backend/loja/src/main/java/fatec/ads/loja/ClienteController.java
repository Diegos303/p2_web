package fatec.ads.loja;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class ClienteController {
    @Autowired
    ClienteRepository bd;
    @Autowired
    Ferramenta f;

    @PostMapping("/api/cliente")
    public void gravar(@RequestBody Cliente obj){
        bd.save(obj);
        System.out.println("Cliente gravado com sucesso!");
       f.enviarEmail(obj.getEmail(), "Obrigado por se cadastrar na nossa loja", "clique aqui para validar o seu cadastro");
    }

    @PutMapping("/api/cliente")
    public void alterar(@RequestBody Cliente obj){
        bd.save(obj);
        System.out.println("Cliente alterado com sucesso!");
    }

    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregar(@PathVariable("codigo") int id){
       if(bd.existsById(id)){
        return bd.findById(id).get();
       } else {
        return new Cliente();
       }
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public void remover(@PathVariable("codigo") int id){
        bd.deleteById(id);
        System.out.println("Cliente removido com sucesso!");
    }

    @GetMapping("/api/clientes")
    public List<Cliente> listar(){
        return bd.findAll();
    }

    @PostMapping("/api/cliente/fazerLogin")
    public Cliente fazerLogin(@RequestBody Cliente obj){
        Optional<Cliente> retorno = bd.fazerLogin(obj.getEmail(), obj.getSenha());
        if(retorno.isPresent()){
            return retorno.get();
        } else {
            return new Cliente();
        }
    }


    //esqueciSenha
    @PostMapping("/api/cliente/esqueciSenha")
    public String esqueciSenha(@RequestBody Cliente obj){

        Optional<Cliente> cliente = bd.buscarPorEmail(obj.getEmail());

        if(cliente.isPresent()){

            f.enviarEmail(
                obj.getEmail(),
                "Recuperação de Senha",
                "Sua senha é: " + cliente.get().getSenha()
            );

            return "Email enviado!";
        }

        return "Email não encontrado!";
    }


}
