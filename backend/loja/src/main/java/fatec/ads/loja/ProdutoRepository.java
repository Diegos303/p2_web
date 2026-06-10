package fatec.ads.loja;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface ProdutoRepository extends  JpaRepository<Produto, Integer> {

    @Query(value="select * from produto where destaque>0 order by destaque,nome", nativeQuery=true)
    public List<Produto> carregarVitrine();

    @Query(value =
    "select * from produto " +
    "where lower(nome) like lower(?1) " +
    "or lower(keywords) like lower(?1) " +
    "or lower(descritivo) like lower(?1)",
    nativeQuery = true)
    public List<Produto> fazerBusca(String termo);

    @Query(value =
    "select * from produto where keywords = :keywords",
    nativeQuery = true)
    List<Produto> buscarPorKeywords(
        @Param("keywords") String keywords
    );
    
}