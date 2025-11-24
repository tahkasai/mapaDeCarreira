import styles from './Contact.module.css'

export default function Contact(){
    return(
        <>
            <section className={styles.contato}>
                <div className={styles.contatos}>
                    <div className={styles.redesContato}>
                        <div>
                            <h2>Entre em Contato</h2>
                            <p>Quer conhecer meus projetos ou conhecer um pouco sobre mim? Entre em contato comigo!</p>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-linktree"></i>
                            <div>
                                <span className={styles.titulo}>Linktree (acesso aos meus projetos)</span>
                                <a href="https://linktr.ee/taina_kasai">Clique aqui</a>
                            </div>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-linkedin"></i>
                            <div>
                                <span className="titulo">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/taina-kasai">Clique aqui</a>
                            </div>
                        </div>
                        <div className={styles.redeSocial}>
                            <i class="fa-brands fa-github"></i>
                            <div>
                                <span className="titulo">Github</span>
                                <a href="https://github.com/tahkasai">Clique aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formsContato}>
                        <form action="">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" id="nome" placeholder="Digite seu nome" className={styles.inputContato} required/>

                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" className={styles.inputContato} required/>

                            <label htmlFor="assunto">Assunto</label>
                            <input type="text" name="assunto" id="assunto" placeholder="Digite o assunto" className={styles.inputContato} required/>

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea name="mensagem" id="mensagem" rows="5" className={styles.inputContato} placeholder='Digite o assunto' required></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}