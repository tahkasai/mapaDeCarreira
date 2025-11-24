import styles from './Map.module.css'
import Career from "../../common/Career/Career";

export default function Map() {
    return (
        <section className={styles.mapaCarreira} id="carreira">
            <h2>Mapa de Carreira</h2>
            <p className={styles.descricaoCarreira}>Este mapa de carreira representa o caminho que estou construindo para me tornar uma desenvolvedora Full-Stack completa. Aqui, organizei meus objetivos, competências e aprendizados para evoluir passo a passo — do estágio até a liderança técnica. Cada etapa é uma oportunidade de crescer, aprender novas tecnologias e me aproximar do futuro que estou construindo com dedicação, foco e paixão pela área de tecnologia.</p>
            <ul className={styles.mapaLinha}>
                
                <Career
                    titulo="Estágio em Programação"
                    descricao="Quero conquistar o meu primeiro estágio na área, adquirindo experiência real no desenvolvimento de aplicações. Entendendo o fluxo de trabalho de equipes de tecnologia, participar de manutenções simples, implementar pequenas funcionalidades e aprender a usar ferramentas essenciais do dia a dia de um desenvolvedor."
                    topicos={[
                        "Comunicação básica",
                        "Trabalho em equipe",
                        "Curiosidade e proatividade",
                        "Organização e responsabilidade",
                        "Aprendizado rápido"
                    ]}
                    roadmap={[
                        "HTML/CSS",
                        "JavaScript",
                        "Lógica de Programação",
                        "Git e Github",
                        "MySQL",
                        "Fundamentos de Java",
                        "Noções de APIs REST"
                    ]}
                />
                <Career
                    titulo="Desenvolvedora Full-Stack Júnior"
                    descricao="Quero atuar no desenvolvimento de aplicações completas, implementando funcionalidades tanto no front quanto no back-end, sempre sob orientação de profissionais mais experientes."
                    topicos={[
                        "Comunicação com a equipe",
                        "Organização no trabalho",
                        "Curiosidade e proatividade",
                        "Resolução de problemas",
                        "Atenção aos detalhes",
                        "Vontade de aprender",
                        "Resiliência"
                    ]}
                    roadmap={[
                        "React",
                        "JavaScript ES6+",
                        "Java",
                        "Spring Boot",
                        "Git Flow",
                        "Consumo e criação de APIs",
                        "Testes básicos",
                        "TypeScript"
                    ]}
                />
                <Career
                    titulo="Desenvolvedora Full-Stack Pleno"
                    descricao="QUero assumir maior autonomia no desenvolvimento, arquitetando soluções, lidando com problemas mais complexos e entregando funcionalidades completas com qualidade."
                    topicos={[
                        "Autonomia",
                        "Pensamento crítico",
                        "Comunicação eficiente",
                        "Colaboração",
                        "Gestão do tempo",
                        "Capacidade de Orientar Iniciantes"
                    ]}
                    roadmap={[
                        "React Router",
                        "Hooks avançados",
                        "State Management ",
                        "Spring Data JPA",
                        "Segurança com Spring Security",
                        "Docker",
                        "CI/CD básico"
                    ]}
                />
                <Career
                    titulo="Desenvolvedora Full-Stack Sênior"
                    descricao="Quero liderar tecnicamente partes do projeto, tomar decisões de arquitetura, elevar a qualidade do código e garantir que o produto seja escalável, seguro e eficiente."
                    topicos={[
                        "Liderança técnica",
                        "Comunicação clara e objetiva",
                        "Alta responsabilidade",
                        "Gestão de conflitos",
                        "Visão sistêmica",
                        "Tomada de decisão"
                    ]}
                    roadmap={[
                        "Arquitetura de Software",
                        "Microsserviços",
                        "Docker e Kubernetes",
                        "Mensageria",
                        "Testes avançados",
                        "Boas práticas de segurança",
                        "DevOps"
                    ]}
                />
                <Career
                    titulo="Tech Lead"
                    descricao="Quero atuar como líder técnico do time, sendo responsável por direcionar decisões arquiteturais, garantir a qualidade do projeto e apoiar o desenvolvimento dos membros do time."
                    topicos={[
                        "Liderança colaborativa",
                        "Comunicação excepcional",
                        "Visão estratégica",
                        "Tomada de decisão rápida e segura",
                        "Gestão de pessoas",
                        "Inteligência emocional"
                    ]}
                    roadmap={[
                        "Arquitetura avançada",
                        "Liderança técnica",
                        "Planejamento de sprints",
                        "Gestão de times",
                        "Cultura DevOps",
                        "Segurança em larga escala",
                        "Cloud"
                    ]}
                />
                
            </ul>
        </section>
    );
}
