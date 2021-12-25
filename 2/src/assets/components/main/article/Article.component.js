import React, {Component} from 'react';
import style from '../../../styles/article.module.scss'

class ArticleComponent extends Component {
    render() {
        return (
            <>
                <article className={style.article}>
                    <div className={style.article__real}>
                        <h1 className={style.article__real__header}> Hi,<br/>
                            I`m <span className={style.article__real__header__text}>Alaei</span>
                        </h1>
                        <div className={style.article__real__info}> User Interface Designer</div>
                        <a href='#' className={style.article__real__button}><span>Hire Me</span> <span
                            className={style.article__real__button__arrow}> &#8594; </span>
                        </a>
                    </div>
                    <article className={style.article__info}>
                        <div className={style.article__info__export}> Expert on</div>
                        <p className={style.article__info__based}> Based in Netherland <br/>
                            i`m developer and <br/>
                            UI/UX designer.
                        </p>
                        <p className={style.article__info__look}> Hey are looking for designer to build <br/> your brand and
                            grow your
                            business? <br/> let`s shake hands with me. </p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className={style.article__info__link}> Download CV <i
                            className="fas fa-cloud-download-alt"/> </a>
                    </article>
                </article>

            </>
        );
    }
}

export {ArticleComponent};