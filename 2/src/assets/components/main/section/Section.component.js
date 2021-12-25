import React, {Component} from 'react';
import styles from '../../../styles/section.module.scss'

class SectionComponent extends Component {
    render() {
        return (
            <>
                <section className={styles.icon}>
                    <div className={styles.icon__items}>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"> <i className="fab fa-facebook-f"/> </a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"> <i className="fab fa-twitter"/> </a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#" className={styles.icon__items__double}> <i className="fab fa-instagram"/>
                                <div className={styles.icon__items__double__div}><i
                                    className={`fas fa-certificate ${styles.icon__items__double__star}`}/> <a href="#"
                                                                                                              className={styles.icon__items__double__site}> www.aminAlaei.com/Home </a>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <div className={styles.icon__chat}>
                        <a href='#' className={styles.icon__chat__text}> Let`s Chat
                            <i className={`fas fa-comment-dots ${styles.icon__chat__icon}`}/>
                        </a>
                    </div>
                </section>

            </>
        );
    }
}

export {SectionComponent};