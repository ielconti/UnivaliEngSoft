import React from 'react';
import { Routes, Route } from "react-router-dom";

import { UsuarioProvider } from './providers/usuario';

import Login from './pages/login'

import AlunoTrilhas from './pages/aluno/Trilhas'
import AlunoPergunta from './pages/aluno/Pergunta'
import AlunoRanking from './pages/aluno/Ranking'
import AlunoRelatorio from './pages/aluno/Relatorio'
import AlunoMenu from './pages/aluno/Menu'

import ProfessorMenu from './pages/professor/Menu'
import ProfessorTrilhas from './pages/professor/Trilhas'
import ProfessorNovaTrilha from './pages/professor/NovaTrilha'
import ProfessorNovaQuestao from './pages/professor/NovaQuestao'

import './App.css';


function App() {
  return (
    <div className="App">
      <UsuarioProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/aluno/trilhas' element={<AlunoTrilhas />} />
          <Route path='/aluno/pergunta' element={<AlunoPergunta />} />
          <Route path='/aluno/ranking' element={<AlunoRanking />} />
          <Route path='/aluno/relatorio' element={<AlunoRelatorio />} />
          <Route path='/aluno/menu' element={<AlunoMenu />} />

          <Route path='/professor/menu' element={<ProfessorMenu />} />
          <Route path='/professor/trilhas' element={<ProfessorTrilhas />} />
          <Route path='/professor/novatrilha' element={<ProfessorNovaTrilha />} />
          <Route path='/professor/novaquestao' element={<ProfessorNovaQuestao />} />
        </Routes>
      </UsuarioProvider>
    </div>
  );
}

export default App;
