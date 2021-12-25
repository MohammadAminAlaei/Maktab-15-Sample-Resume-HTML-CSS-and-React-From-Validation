import React, {Component} from 'react';
import styles from '../../styles/header.module.scss'

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className={styles.nav}>
                        <div className={styles.nav__group}>
                            <h2 className={styles.nav__group__title}> Mohammad Amin <div className={styles.nav__group__heart}/>
                            </h2>
                            <span className={styles.nav__group__email}> mohammadaminalaee315@gmail.com </span>
                        </div>
                        <div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={styles.nav__menu}>
                                <li className={`${styles.nav__menu__li} ${styles.nav__menu__li__1}`}/>
                                <li className={`${styles.nav__menu__li} ${styles.nav__menu__li__2}`}/>
                                <li className={`${styles.nav__menu__li} ${styles.nav__menu__li__3}`}/>
                            </a>
                        </div>
                    </nav>
                </header>

            </>
        );
    }
}

export {HeaderComponent};