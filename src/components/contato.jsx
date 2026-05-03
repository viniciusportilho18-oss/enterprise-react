import { useState, useEffect, useRef } from "react";

function Contato({ servicoSelecionado }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    mensagem: ""
  });

  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [destacado, setDestacado] = useState(false);

  const nomeInputRef = useRef(null);

  useEffect(() => {
    if (servicoSelecionado) {
      setForm((prev) => ({
        ...prev,
        servico: servicoSelecionado
      }));

      setDestacado(true);

      setTimeout(() => {
        nomeInputRef.current?.focus();
      }, 700);

      setTimeout(() => {
        setDestacado(false);
      }, 1800);
    }
  }, [servicoSelecionado]);

  function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, "");

    if (valor.length <= 11) {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return valor;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    let novoValor = value;

    if (name === "telefone") {
      novoValor = formatarTelefone(value);
    }

    setForm({
      ...form,
      [name]: novoValor
    });

    setErros({
      ...erros,
      [name]: ""
    });
  }

  function validarFormulario() {
    const novosErros = {};

    if (!form.nome.trim()) {
      novosErros.nome = "Digite seu nome.";
    }

    if (!form.telefone.trim()) {
      novosErros.telefone = "Digite seu WhatsApp.";
    }

    if (!form.servico) {
      novosErros.servico = "Selecione um serviço.";
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  function enviarWhatsApp(event) {
    event.preventDefault();

    if (!validarFormulario()) return;

    setEnviando(true);

    const texto = `Olá, sou ${form.nome}. Gostaria de solicitar um orçamento.

Telefone: ${form.telefone}
Serviço desejado: ${form.servico}
Detalhes: ${form.mensagem || "Não informado"}`;

    const mensagemFormatada = encodeURIComponent(texto);

    setTimeout(() => {
      window.open(
        `https:///5567992303005?text=${mensagemFormatada}`,
        "_blank"
      );
      setEnviando(false);
    }, 800);
  }

  return (
    <section
      id="contato"
      className={`contato ${destacado ? "contato-destaque" : ""}`}
    >
      <h2>Solicite seu orçamento</h2>
      <p>Preencha os dados abaixo e fale direto com a Enterprise pelo WhatsApp.</p>

      <form onSubmit={enviarWhatsApp} className="form-contato">
        <input
          ref={nomeInputRef}
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <input
          type="tel"
          name="telefone"
          placeholder="Seu WhatsApp"
          value={form.telefone}
          onChange={handleChange}
        />
        {erros.telefone && <span className="erro">{erros.telefone}</span>}

        <select name="servico" value={form.servico} onChange={handleChange}>
          <option value="">Selecione o serviço</option>

          {form.servico &&
            !["Instalação", "Manutenção", "Higienização", "Venda de aparelho"].includes(form.servico) && (
              <option value={form.servico}>{form.servico}</option>
            )}

          <option value="Instalação">Instalação</option>
          <option value="Manutenção">Manutenção</option>
          <option value="Higienização">Higienização</option>
          <option value="Venda de aparelho">Venda de aparelho</option>
        </select>
        {erros.servico && <span className="erro">{erros.servico}</span>}

        <textarea
          name="mensagem"
          placeholder="Conte mais detalhes sobre o que precisa..."
          value={form.mensagem}
          onChange={handleChange}
        />

        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar pelo WhatsApp"}
        </button>
      </form>
    </section>
  );
}

export default Contato;