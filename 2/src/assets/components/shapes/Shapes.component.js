import React, {Component} from 'react';
import styles from '../../styles/shapes.module.scss'

class ShapesComponent extends Component {
    render() {
        return (
            <div>
                <div className={styles.shapes}>
                    <div className={styles.shapes__relative}>
                        <div className={styles.shapes__absolute}/>
                    </div>
                </div>
            </div>
        );
    }
}

export {ShapesComponent};