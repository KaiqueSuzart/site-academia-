const cards = [
  {
    titulo: 'Como seguir uma alimentação saudável?',
    texto: 'Comece fazendo um acompanhamento nutricional',
  },
  {
    titulo: 'Quando devo consultar um nutricionista?',
    texto: 'Conheça as situações em que é necessário marcar uma consulta com um nutricionista.',
  },
  {
    titulo: 'Perda de Peso',
    texto: 'Um dos motivos mais comuns para a realização de uma consulta com um nutricionista é a perda de peso. O especialista analisa a saúde da pessoa para montar a dieta mais adequada, de acordo com as necessidades do paciente, sem carência de nutrientes importantes.',
  },
  {
    titulo: 'Ganho de Massa Muscular ou de Peso',
    texto: 'Além de auxiliar no emagrecimento, o nutricionista também ajuda no ganho de massa muscular de atletas e pessoas que querem avançar nos treinos, montando uma dieta adequada para pré e pós-treino.',
  },
  {
    titulo: 'Restrição Alimentar',
    texto: 'Se você tem intolerância ao glúten ou à lactose, por exemplo, o nutricionista pode ajudar a criar refeições saudáveis com os alimentos que pode consumir, tornando a alimentação mais apetitosa e agradável.',
  },
  {
    titulo: 'Controle de Doenças Crônicas',
    texto: 'Pacientes com doenças crônicas influenciadas pela alimentação, como hipertensão, diabetes e colesterol alto, precisam ser acompanhados por um nutricionista para indicar os melhores alimentos a consumir e evitar.',
  },
  {
    titulo: 'Imunidade',
    texto: 'Manter uma dieta saudável ajuda a melhorar a imunidade e cuidar do organismo como um todo.',
  },
  {
    titulo: 'Agende sua avaliação',
    texto: 'Não perca tempo e venha agendar sua avaliação nutricional. (11) 97240-5688',
  },
];

function Nutricao() {
  return (
    <div style={{ background: '#000', minHeight: '80vh', padding: '48px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
        <h2 style={{ color: '#D32F2F', fontWeight: 900, fontSize: 38, marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
          Nutrição
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{ background: '#18191d', borderRadius: 18, padding: '32px 28px', minWidth: 260, maxWidth: 340, boxShadow: '0 2px 16px #000a', border: '2px solid #23242a', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ color: '#D32F2F', fontWeight: 800, fontSize: 22, marginBottom: 14, textAlign: 'center' }}>{card.titulo}</h3>
              <p style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nutricao; 