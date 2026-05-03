import { useState } from "react";

const listaProdutos = [
  { id: 1, nome: "Split 9.000 BTUs", marca: "LG", preco: 1899.90, ambiente: "Até 15m²" },
  { id: 2, nome: "Split 12.000 BTUs", marca: "Samsung", preco: 2299.90, ambiente: "Até 20m²" },
  { id: 3, nome: "Split 18.000 BTUs", marca: "Midea", preco: 2899.90, ambiente: "Até 30m²" },
  { id: 4, nome: "Split 24.000 BTUs", marca: "Elgin", preco: 3499.90, ambiente: "Até 40m²" },
  { id: 5, nome: "Split 30.000 BTUs", marca: "LG", preco: 4299.90, ambiente: "Até 60m²" },
  { id: 6, nome: "Split 18.000 BTUs", marca: "Samsung", preco: 2899.90, ambiente: "Até 30m²" }
];

const marcas = ["Todos", "LG", "Samsung", "Midea", "Elgin"];

function Produtos({ selecionarServico }) {
  const [filtro, setFiltro] = useState("Todos");

  const produtosFiltrados =
    filtro === "Todos"
      ? listaProdutos
      : listaProdutos.filter((p) => p.marca === filtro);

  function handleInteresse(produto) {
    // 👇 manda o produto completo para o formulário
    selecionarServico(`Venda de aparelho - ${produto.nome} (${produto.marca})`);

    // 👇 scroll suave até o formulário
    document.getElementById("contato")?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ color: "#0077b6", fontSize: "24px" }}>
        Nossos Produtos
      </h2>

      <p style={{ color: "#666" }}>
        Aparelhos com instalação inclusa e garantia de fábrica.
      </p>

      {/* FILTROS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          margin: "20px 0"
        }}
      >
        {marcas.map((marca) => (
          <button
            key={marca}
            onClick={() => setFiltro(marca)}
            style={{
              padding: "8px 20px",
              borderRadius: "20px",
              border: "2px solid #08048e",
              backgroundColor: filtro === marca ? "#08048e" : "white",
              color: filtro === marca ? "white" : "#08048e",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {marca}
          </button>
        ))}
      </div>

      {/* GRID DE PRODUTOS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            style={{
              flex: "1 1 200px",
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px 20px",
              backgroundColor: "#f8f9fa",
              transition: "0.2s"
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#08048e",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              {produto.marca}
            </div>

            <h3
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "8px 0"
              }}
            >
              {produto.nome}
            </h3>

            <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
              {produto.ambiente}
            </p>

            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#b60000",
                margin: "8px 0"
              }}
            >
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </div>

            {/* BOTÃO CORRETO */}
            <button
              onClick={() => handleInteresse(produto)}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#08048e",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              Tenho interesse
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Produtos;