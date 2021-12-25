import React, {Component} from 'react';
import {ArticleComponent} from "./article/Article.component";
import {SectionComponent} from "./section/Section.component";

class MainComponent extends Component {
    render() {
        return (
            <>
                <ArticleComponent/>
                <SectionComponent/>
            </>
        );
    }
}

export {MainComponent};