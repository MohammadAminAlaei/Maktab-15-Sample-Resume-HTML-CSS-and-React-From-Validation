import React, {Component} from 'react';


class App extends Component {

    state = {
        inputUserName: '',
        inputFirstName: '',
        inputLastName: '',
        inputEmail: ''
    }

    handleClick(e) {
        e.preventDefault()
        console.log({
            name: this.state.inputUserName ? this.state.inputUserName : null,
            FirstName: this.state.inputFirstName ? this.state.inputFirstName : null,
            LastName: this.state.inputLastName ? this.state.inputLastName : null,
            Email: this.state.inputEmail ? this.state.inputEmail : null
        })
    }

    render() {
        return (
            <>
                <div className={'light'}/>
                <main>
                    <div className={'card'}>
                        <h2 className={'card__title'}> Create account </h2>
                        <span className={'card__text'}> already gave an account? <a href="#" className={'card__link'}> Sign
                        in </a></span>
                        <form className={'card__input'}>
                            <input type="text" placeholder={'User Name'} className={'card__input__name custom-input'}
                                   onChange={e => this.setState({inputUserName: e.target.value})}/>
                            <div className={'card__inputs'}>
                                <input type="text" placeholder={'First Name'}
                                       className={'card__inputs__fName custom-input'}
                                       onChange={e => this.setState({inputFirstName: e.target.value})}/>/>
                                <input type="text" placeholder={'Last Name'}
                                       className={'card__inputs__lName custom-input'}
                                       onChange={e => this.setState({inputLastName: e.target.value})}/>
                            </div>
                            <input type="email" placeholder={'E-mail'} className={'card__input__email custom-input'}
                                   onChange={e => this.setState({inputEmail: e.target.value})}/>
                            <button type={"submit"} className={'card__button'} onClick={e => this.handleClick(e)}> Sign
                                Up
                            </button>
                        </form>
                        <div className={'card__agree'}>
                            <input type="checkbox" id={'check'} className={'card__agree__checkbox'}/><label
                            htmlFor="check"
                            className={'card__agree__label'}>I
                            have read And to the <a
                                href="#" className={'card__agree__link'}> Terms of Service </a></label>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default App;