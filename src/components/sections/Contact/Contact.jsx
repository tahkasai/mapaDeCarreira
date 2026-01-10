import styles from './Contact.module.css'
import button from './../../common/Button/Button.module.css'
import SplitText from './../../common/SplitText/SplitText';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Contact(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviandoEmail(e){
        e.preventDefault();

        if (nome === ''|| email === '' || assunto === '' || mensagem === ''){
            alert("Preencha todos os campos");
            return;
        }

        const template = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        }

        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_I,
                     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                     template,
                     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((resposta) => {
            console.log("Email enviado",resposta.status,resposta.text)
            setNome('')
            setAssunto('')
            setMensagem('')
            setEmail('')
        }, (err) =>{
            console.log("ERRO: ",err)
        })
    }

    return(
        <>
            <section className={styles.contato} id='contato'>
                <div className={styles.contatos}>
                    <div className={styles.redesContato}>
                        <div>
                            <SplitText 
                                tag="h2"
                                text="Entre em Contato!"
                            />
                            <p>Quer conhecer meus projetos ou conhecer um pouco sobre mim? Entre em contato comigo!</p>
                        </div>
                        <div className={styles.redeSocial}>
                            {/* <i class="fa-regular fa-envelope"></i> */}
                            <i class="fa-solid fa-envelope"></i>
                            <div>
                                <span className={styles.titulo}>E-mail</span>
                                <p>tainakasai01@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-linktree"></i>
                            <div>
                                <span className={styles.titulo}>Linktree (acesso aos meus projetos)</span>
                                <a href="https://linktr.ee/taina_kasai">Ver projetos</a>
                            </div>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-linkedin"></i>
                            <div>
                                <span className="titulo">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/taina-kasai">Ver perfil</a>
                            </div>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-github"></i>
                            <div>
                                <span className="titulo">Github</span>
                                <a href="https://github.com/tahkasai">Ver repositórios</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formsContato}>
                        <form action="" onSubmit={enviandoEmail}>
                            <label htmlFor="nome">Nome</label>
                            <input 
                                type="text" 
                                name="nome" 
                                id="nome" 
                                placeholder="Digite seu nome" 
                                className={styles.inputContato} 
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                            />

                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Digite seu e-mail" 
                                className={styles.inputContato} 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />

                            <label htmlFor="assunto">Assunto</label>
                            <input 
                                type="text" 
                                name="assunto" 
                                id="assunto" 
                                placeholder="Digite o assunto" 
                                className={styles.inputContato} 
                                onChange={(e) => setAssunto(e.target.value)}
                                value={assunto}
                            />

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea 
                                name="mensagem" 
                                id="mensagem" 
                                rows="5" 
                                className={styles.inputContato} 
                                placeholder='Digite o assunto' 
                                onChange={(e) => setMensagem(e.target.value)}
                                value={mensagem}
                            />
                            <input type="submit" value="enviar" className={button.BotaoForms}/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}