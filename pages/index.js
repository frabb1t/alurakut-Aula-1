import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
          <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadious: '8px'}} />
        </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'frabb1t';
  const pessoasFavoritas = ['Jaen-Scarlo']

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className = "profileArea" style={{ gridArea:'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
      <div className = "welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)  
          </h1>

          <OrkutNostalgicIconSet/>
        </Box> 
      </div>
      <div className = "profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationBoxWrapper>
          <h2 className="smallTitle">
          Amigos {(pessoasFavoritas.length)}
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={`https//github.com/${itemAtual}.png`}/>
                <span>{itemAtual}</span>
              </a>
                </li>
              
              )
            })}
          </ul>
        </ProfileRelationBoxWrapper>
      </div>      
    </MainGrid>
    </>
    )
}
