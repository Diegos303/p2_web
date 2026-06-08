package fatec.ads.loja;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LojaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LojaApplication.class, args);
	}

			    @Bean
CommandLineRunner carregarProdutos(ProdutoRepository bd) {
    return args -> {

        Produto p = new Produto();
        p.setCodigo(1);
        p.setNome("Calça Sonia Marron");
		p.setDescritivo(
			"Calça de cintura alta com modelagem reta e levemente ampla, que alonga a silhueta com elegância. Possui caimento fluido, acabamento minimalista e conforto no vestir, sendo ideal para composições sofisticadas, versáteis e atemporais."
		);
        p.setValor(868.00);
		p.setPromo(830.00);
		p.setQuantidade(10);
        p.setDestaque(1);

		bd.save(p);

		Produto p2 = new Produto();
		p2.setCodigo(2);
        p2.setNome("Camisa Mila Listrada");
		p2.setDescritivo(
			"Camisa de caimento fluido e modelagem levemente ampla, confeccionada em tecido leve e macio. As listras verticais alongam a silhueta, enquanto a gola clássica e os botões frontais garantem versatilidade e sofisticação para diferentes ocasiões."
		);
        p2.setValor(698.00);
		p2.setPromo(650.00);
		p2.setQuantidade(7);
        p2.setDestaque(1);

		bd.save(p2);
	};
}
}
