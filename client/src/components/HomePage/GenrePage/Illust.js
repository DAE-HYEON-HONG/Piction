import React, {Component} from 'react';
import {Choice} from "../../atoms/Choice";
import { withTranslation } from "react-i18next";

class illust extends Component{
    render() {
        const {t} = this.props;
        return(
            <div className="illust-size">
                {illustPost.map((item, index) =>{
                    return(
                        <div className="illustPosts">
                            <img src={item.src} alt={t('일러스트')} key={index}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withTranslation()(illust);