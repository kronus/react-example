
import React from 'react';
import { TablePagination } from 'react-pagination-table';

export  default class SongsPagination extends React.Component {
    state = {
        data: [],
        _columns: [],
        Header: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson });
                this.setState({ Header: ['id', 'title', 'original_band', 'description', 'date_posted', 'download_midi_tabs', 'youtube_link', 'download_guitar_m4v' ] });
                console.log(this.state.data.length);
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return(
            <div>
                <TablePagination
                    title="TablePagination"
                    subTitle="Songs I have posted to YouTube"
                    headers={this.state.Header}
                    data={this.state.data}
                    columns="id.title.original_band.description.date_posted.download_midi_tabs.youtube_link.download_guitar_m4v"
                    perPageItemCount={30}
                    totalCount={288}
                    arrayOption={[["size", 'all', ' ']]}
                />
            </div>
        );
    }
}