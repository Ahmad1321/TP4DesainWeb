import React from "react";
import './form.css'

export class FormInputData extends React.Component {
    constructor() {
        super()
        this.state = { show: true };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
          show: !prevState.show
        }));
    }

  render() {
    return(
        <div className="container">
            <div className="artikel">
                <div className="item">
            <h2>Biodata</h2><br />
            <form autocomplete="off">
            <li>
                <label for="name">Masukan Nama</label><br />
                <input className="panjang" type="text" name="name" onChange={this.props.eventChangeName} placeholder="Masukkan Nama" />
            </li>
            <li>
                <label for="email">Masukan Tanggal Lahir</label><br />
                <input className="panjang" type="date" name="date" onChange={this.props.eventChangeDate} />
            </li>
            <li>
                <label for="jenis kelamin">Jenis Kelamin</label><br />
                <input type="radio" name="kelamin" id="kelamin" value="Laki-laki" onChange={this.props.eventChangeGender} checked={this.props.dataGender === "Laki-laki"} />
                <label className="label1" for="kelamin">Laki-laki</label>
                <input type="radio" name="kelamin" id="kelamin" value="Perempuan" onChange={this.props.eventChangeGender} checked={this.props.dataGender === "Perempuan"} />
                <label className="label1" for="kelamin">Perempuan</label>
                <input type="radio" name="kelamin" id="kelamin" value="Other" onChange={this.props.eventChangeGender} checked={this.props.dataGender === "Other"} />
                <label className="label1" for="kelamin">Other</label>
            </li>
            <li>
                <label for="hobi">Hobi</label><br />
                <input  type="checkbox" name="hobi" id="hobi1" onChange={this.props.eventChangeHobi} value="Ngoding" />
                <label className="label1" for="hobi">Ngoding</label>
                <input type="checkbox" name="hobi" id="hobi2" onChange={this.props.eventChangeHobi} value="Makan" />
                <label className="label1" for="hobi">Makan</label>
                <input type="checkbox" name="hobi" id="hobi3" onChange={this.props.eventChangeHobi} value="Tidur" />
                <label className="label1" for="hobi">Tidur</label>
                <input type="checkbox" name="hobi" id="hobi4" onChange={this.props.eventChangeHobi} value="Lari" />
                <label className="label1" for="hobi">Lari</label>
                <input type="checkbox" name="hobi" id="hobi5" onChange={this.props.eventChangeHobi} value="Membaca" />
                <label className="label1" for="hobi">Membaca</label>
                <input type="checkbox" name="hobi" id="hobi6" onChange={this.props.eventChangeHobi} value="Nonton" />
                <label className="label1" for="hobi">Nonton</label>
            </li>
            <li>
                <label>Agama</label>
                <select class="combo" id="agama" value={this.props.dataAgama} onChange={this.props.eventChangeAgama}>
                    <option value="Select">Select</option>
                    <option value="islam">islam</option>
                    <option value="kristen">kristen</option>
                    <option value="hindu">hindu</option>
                    <option value="budha">budha</option>
                </select>
            </li>
            <li>
                <label for="message">Message*</label><br />
                <textarea className="textm" id="pesan" rows="4" cols="50" name="comment" form="id" value={this.props.dataMsg} onChange={this.props.eventChangeMsg}></textarea>
            </li>
            </form>

            <li>
                <button onClick={this.handleClick} className="submit">Submit</button>
            </li>

            </div>
            <div className="tabel1" style={{ display: this.state.show ? 'none' : 'block' }}>
                <br />
                <table>
                    <tr>
                        <th className="label1">Label</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>{ this.props.dataNama }</td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>{this.props.dataDate}</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>{this.props.dataGender}</td>
                    </tr>
                    <tr>
                        <td>Hobi</td>
                        <td id="ohobi">{this.props.dataHobi}</td>
                    </tr>
                    <tr>
                        <td>Agama</td>
                        <td id="oagama">{this.props.dataAgama}</td>
                    </tr>
                    <tr>
                        <td>Pesan</td>
                        <td id="opesan">{this.props.dataMsg}</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
    )
  }
}