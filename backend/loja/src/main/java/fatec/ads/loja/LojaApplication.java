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
		p.setPromo("Por 5x de R$173,0");
		p.setQuantidade(10);
        p.setDestaque(1);
		p.setKeywords("calca-feminina");

		bd.save(p);

		//-------------------------------------------------------------------------------

		Produto p2 = new Produto();
		p2.setCodigo(2);
        p2.setNome("Camisa Mila Listrada");
		p2.setDescritivo(
			"Camisa de caimento fluido e modelagem levemente ampla, confeccionada em tecido leve e macio. As listras verticais alongam a silhueta, enquanto a gola clássica e os botões frontais garantem versatilidade e sofisticação para diferentes ocasiões."
		);
        p2.setValor(698.00);
		p2.setPromo("Por 5x de R$139,6");
		p2.setQuantidade(7);
        p2.setDestaque(1);
		p2.setKeywords("camiseta-feminina");

		bd.save(p2);

		//---------------------------------------------------------------

		Produto p3 = new Produto();
		p3.setCodigo(3);
        p3.setNome("Polo Manga Curta Lisa Piquet");
		p3.setDescritivo(
			"Polo Lisa em Piquet de Toque Encorpado, com Acabamento Impecável e Visual Limpo. Uma Peça Essencial Que Combina Casualidade e Elegância. 100% Algodão"
		);
        p3.setValor(499.00);
		p3.setPromo("Por 10x de R$49,99");
		p3.setQuantidade(9);
        p3.setDestaque(1);
		p3.setKeywords("camiseta-masculina");

		bd.save(p3);

		// ----------------------------------------------------

		Produto p4 = new Produto();
		p4.setCodigo(4);
		p4.setNome("Blusão Thermoblock Meio Zíper e Capuz");
		p4.setDescritivo(
			"Blusão esportivo com meio zíper e capuz, confeccionado em tecido tecnológico Thermoblock. Proporciona conforto térmico, elasticidade e liberdade de movimentos para o dia a dia ou atividades ao ar livre."
		);
		p4.setValor(699.90);
		p4.setPromo("Por 10x de R$69,99");
		p4.setQuantidade(8);
		p4.setDestaque(1);
		p4.setKeywords("blusa-masculina");

		bd.save(p4);

		// ----------------------------------------------------

		Produto p5 = new Produto();
		p5.setCodigo(5);
		p5.setNome("Paletó Linho Sem Forro");
		p5.setDescritivo(
			"Paletó em linho com caimento natural e visual sofisticado. A modelagem leve e sem forro garante conforto e versatilidade, ideal para composições elegantes em ocasiões formais ou casuais."
		);
		p5.setValor(2999.90);
		p5.setPromo("Por 10x de R$299,99");
		p5.setQuantidade(5);
		p5.setDestaque(1);
		p5.setKeywords("blusa-masculina");

		bd.save(p5);

		// ----------------------------------------------------

		Produto p6 = new Produto();
		p6.setCodigo(6);
		p6.setNome("Mochila Couro Bolso Frontal Embutido");
		p6.setDescritivo(
			"Mochila em couro com design elegante e funcional. Possui bolso frontal embutido, amplo espaço interno e acabamento premium, ideal para rotina profissional, viagens e uso diário."
		);
		p6.setValor(1999.90);
		p6.setPromo("Por 10x de R$199,99");
		p6.setQuantidade(6);
		p6.setDestaque(1);
		p6.setKeywords("bolsa");

		bd.save(p6);

		// ----------------------------------------------------

		Produto p7 = new Produto();
		p7.setCodigo(7);
		p7.setNome("Casulo Greta Bege e Preto");
		p7.setDescritivo(
			"Casaco de modelagem ampla e elegante, confeccionado em tecido texturizado de toque macio. O contraste nas extremidades destaca o design sofisticado, ideal para sobreposições modernas e atemporais."
		);
		p7.setValor(988.00);
		p7.setPromo("Por 6x de R$164,66");
		p7.setQuantidade(10);
		p7.setDestaque(1);
		p7.setKeywords("blusa-feminina");

		bd.save(p7);

		// ----------------------------------------------------

		Produto p8 = new Produto();
		p8.setCodigo(8);
		p8.setNome("Conjunto Martina Tricot Bege");
		p8.setDescritivo(
			"Conjunto composto por blusa de gola alta com mangas amplas e calça de caimento reto. Une conforto, sofisticação e praticidade em uma proposta moderna para diversas ocasiões."
		);
		p8.setValor(1398.00);
		p8.setPromo("Por 6x de R$233,00");
		p8.setQuantidade(8);
		p8.setDestaque(1);
		p8.setKeywords("camiseta-feminina");

		bd.save(p8);

		// ----------------------------------------------------

		Produto p9 = new Produto();
		p9.setCodigo(9);
		p9.setNome("Bolsa Tote Preta Média");
		p9.setDescritivo(
			"Bolsa tote média com estrutura firme e acabamento texturizado. Possui alças de mão, alça regulável removível e fechamento em zíper, oferecendo praticidade e elegância no dia a dia."
		);
		p9.setValor(359.90);
		p9.setPromo("Por 3x de R$119,97");
		p9.setQuantidade(12);
		p9.setDestaque(1);
		p9.setKeywords("bolsa");

		bd.save(p9);

		// ----------------------------------------------------

		Produto p10 = new Produto();
		p10.setCodigo(10);
		p10.setNome("Bermuda Sarja Bolso Faca Cargo com Elástico");
		p10.setDescritivo(
			"Bermuda cargo em sarja com bolso faca e cós com elástico. Combina conforto, praticidade e estilo casual, sendo ideal para o dia a dia e momentos de lazer."
		);
		p10.setValor(459.90);
		p10.setPromo("Por 10x de R$45,99");
		p10.setQuantidade(9);
		p10.setDestaque(1);
		p10.setKeywords("short-masculino");

		bd.save(p10);

		// ----------------------------------------------------

		Produto p11 = new Produto();
		p11.setCodigo(11);
		p11.setNome("Boné Básico de Sarja Bordado com Contraste");
		p11.setDescritivo(
			"Boné em sarja 100% algodão com design minimalista e detalhe bordado em contraste. Uma peça versátil que complementa produções casuais com conforto e estilo."
		);
		p11.setValor(199.90);
		p11.setPromo("Por 10x de R$19,99");
		p11.setQuantidade(20);
		p11.setDestaque(0);
		p11.setKeywords("chapeu");

		bd.save(p11);
	};


}
}
