import { useState } from 'react';
import { FaDumbbell, FaBiking, FaRunning } from 'react-icons/fa';

const dias = [
  'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'
];

const grade = [
  [
    { hora: '10h30', nome: 'FUNCIONAL' },
    { hora: '11h30', nome: 'HIIT' },
    { hora: '18h00', nome: 'RITMOS' },
    { hora: '19h00', nome: 'PILATES' },
    { hora: '20h00', nome: 'FIT DANCE' },
    { hora: '20h00', nome: 'LUTAS' },
    { hora: '17h30', nome: 'MUAY THAI' },
    { hora: '20h00', nome: 'JIU JITSU' },
  ],
  [
    { hora: '07h10', nome: 'FUNCIONAL' },
    { hora: '11h00', nome: 'JUMP' },
    { hora: '18h00', nome: 'RITMOS' },
    { hora: '19h00', nome: 'LOCALIZADA' },
    { hora: '19h00', nome: 'LUTAS' },
    { hora: '19h00', nome: 'JIU JITSU' },
    { hora: '20h30', nome: 'MUAY THAI' },
  ],
  [
    { hora: '10h00', nome: 'BRABUSATTACK' },
    { hora: '10h50', nome: 'JUMP' },
    { hora: '18h00', nome: 'JUMP' },
    { hora: '19h00', nome: 'PILATES' },
    { hora: '19h00', nome: 'LUTAS' },
    { hora: '17h30', nome: 'MUAY THAI' },
    { hora: '20h00', nome: 'JIU JITSU' },
  ],
  [
    { hora: '07h10', nome: 'BRABUSATTACK' },
    { hora: '11h00', nome: 'PILATES' },
    { hora: '18h00', nome: 'G.A.P' },
    { hora: '19h00', nome: 'FUNCIONAL' },
    { hora: '19h00', nome: 'LUTAS' },
    { hora: '19h00', nome: 'JIU JITSU' },
    { hora: '20h30', nome: 'MUAY THAI' },
  ],
  [
    { hora: '11h00', nome: 'LOCALIZADA' },
    { hora: '20h00', nome: 'FIT DANCE' },
    { hora: '20h00', nome: 'LUTAS' },
    { hora: '17h30', nome: 'MUAY THAI' },
    { hora: '20h00', nome: 'JIU JITSU' },
  ],
];

function GradeAulas() {
  const [diaAtivo, setDiaAtivo] = useState(0);
  return (
    <div style={{ background: '#000', minHeight: '80vh', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
        <h2 style={{ color: '#D32F2F', fontWeight: 900, fontSize: 38, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'center' }}>
          Grade de Aulas
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
          {dias.map((dia, idx) => (
            <button key={dia} onClick={() => setDiaAtivo(idx)} style={{
              background: idx === diaAtivo ? '#D32F2F' : 'transparent',
              color: idx === diaAtivo ? '#fff' : '#D32F2F',
              border: '2px solid #D32F2F',
              borderRadius: 18,
              padding: '10px 28px',
              fontWeight: 700,
              fontSize: 18,
              cursor: 'pointer',
              transition: 'all .2s',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>{dia}</button>
          ))}
        </div>
        <table style={{ width: '100%', background: '#18191d', borderRadius: 18, boxShadow: '0 2px 16px #000a', border: '2px solid #23242a', color: '#fff', fontSize: 20, overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#23242a' }}>
              <th style={{ padding: 16, textAlign: 'left', fontWeight: 800, fontSize: 20, color: '#D32F2F', letterSpacing: 1 }}>Horário</th>
              <th style={{ padding: 16, textAlign: 'left', fontWeight: 800, fontSize: 20, color: '#D32F2F', letterSpacing: 1 }}>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {grade[diaAtivo].map((aula, idx) => (
              <tr key={idx} style={{ borderBottom: '1.5px solid #23242a' }}>
                <td style={{ padding: 14, fontWeight: 700 }}>{aula.hora}</td>
                <td style={{ padding: 14 }}>{aula.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradeAulas; 