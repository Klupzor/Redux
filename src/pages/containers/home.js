
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from './../../categories/components/categories';
import Related from './../components/related';
import ModalContainer from './../../widgets/containers/modal';
import Modal from './../../widgets/components/modal';
import HandleError from './../../error/containers/handle-error';
import VideoPlayer from './../../player/container/video-player';
import {connect} from 'react-redux';

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay
                                />
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleError>

        )
    }
}

function mapStateToProps(state, props){
    return{
        categories: state.data.categories
    }
}

export default connect(mapStateToProps)(Home)