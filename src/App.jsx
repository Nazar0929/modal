
import { Component } from "react";
import "./App.css"
import Modal from "./component/Modal/Modal";

class App extends Component {

  state = {
    showModal: false
  }

  handleTogleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }))
  }

  render() {

    const {showModal} = this.state

    return(
      <>
      <button type="button" onClick={this.handleTogleModal}>Відкрити Модальне вікно</button>
      {showModal && <Modal onClose={this.handleTogleModal}>
        <h1>Модальне вікно</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eum labore similique suscipit ipsum sapiente cupiditate voluptates tempore facilis autem aliquam minus quibusdam repellendus. Explicabo blanditiis culpa magnam vero? Quia!</p>
        <button type="button" onClick={this.handleTogleModal}>Закрити Модальне вікно</button>
      </Modal>}
   
      </>
    )
  }
}

export default App