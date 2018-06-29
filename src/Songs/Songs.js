
import React from 'react';

export  default class Songs extends React.Component {

    state = {
        data: [],
        _columns: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
        .then((response) => response.json())
        .then(responseJson => {
            this.setState({ data: responseJson });
            this.createColumns();
        })
        .catch(error => {
            console.error(error);
        });
    }

    createColumns() {
        this.setState({ _columns: ['id', 'title', 'original_band', 'description', 'date_posted', 'download_midi_tabs', 'youtube_link', 'download_guitar_m4v' ] });
       // console.log('inside createColumns: ' + this.state._columns[0]);
    }

    render() {
        return (
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>{this.state._columns[1]}</th>
                    <th>{this.state._columns[2]}</th>
                    <th>{this.state._columns[3]}</th>
                    <th>{this.state._columns[4]}</th>
                    <th>{this.state._columns[5]}</th>
                    <th>{this.state._columns[6]}</th>
                    <th>{this.state._columns[7]}</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(objTR => {
                    return (
                        <tr key={objTR.id}>
                            <td className="tdLft">{objTR.title}</td>
                            <td>{objTR.original_band}</td>
                            <td className="tdJust">{objTR.description}</td>
                            <td>{objTR.date_posted}</td>
                            <td className="mZip" onClick={()=> window.open( objTR.download_midi_tabs, "_blank")}></td>
                            <td className="mYouTube" onClick={()=> window.open( objTR.youtube_link, "_blank")}></td>
                            <td className="mVolume" onClick={()=> window.open( objTR.download_guitar_m4v, "_blank")}></td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
        );
    }
}