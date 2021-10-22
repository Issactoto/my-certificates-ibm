import React, { useState, useEffect } from 'react';
import Prismic from '@prismicio/client';
import { Date, Link, RichText, Group } from 'prismic-reactjs';
import { Button, Loading } from 'carbon-components-react';
import {ReactComponent as LaunchIcon} from "../images/image.svg";
import {convertCertificateType,convertCompany,SortByCategory} from "../components/displayFunction"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import ReactLoading from 'react-loading';


import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from 'carbon-components-react';

import '../index.scss';
import {apiEndpoint,accessToken} from '../key';


const headers = [
{
    key: 'name',
    header: 'Certificate Name',
},
{
    key: 'company',
    header: 'Company',
},
{
    key: 'level',
    header: 'Level',
},
{
    key: 'category',
    header: 'Category',
},

{
    key: 'status',
    header: 'Status',
},
{
    key: 'image',
    header: 'Image',
},
];

const Client = Prismic.client(apiEndpoint, { accessToken })




function App(){
    const [rows, setRowData] = useState(null);
    const [isReady, setReadyData] = useState(false);
    const [  isOpen, setIsOpen ] = useState(false);
    const [ currentPictureLink, setPictureLink ] = useState(null);
    const pictureList = [];

    

    useEffect(  ()  => {
        const fetchData = async () => {
            const response = await Client.query(
            Prismic.Predicates.at('document.type', 'certificate'));
            
            if (response) {
                var tempCerts =[];
                console.log("response.results[0]")
                console.log(response.results[0].data)
                response.results[0].data.main.map(function(reference, index) {
                    tempCerts.push(
                        {
                            name: <strong style={{color:"black"}}>{reference.certname[0].text}</strong>,
                            company: convertCompany(reference.company[0].text),
                            level: convertCertificateType(reference.level[0].text),
                            notDisplayLevel:reference.level[0].text,
                            category:reference.category[0].text ,
                            status:reference.status[0].text,
                            image:<LaunchIcon className="launchIcon" 
                                    onClick={()=>{
                                        setPictureLink(pictureList[index]);
                                        setIsOpen(true);
                                    }
                                    }
                                  /> ,
                            id : index
                        },
                    );
                    pictureList.push(reference.certificate.url);
                });
                tempCerts.sort(SortByCategory)
                setRowData(tempCerts);
                setReadyData(true);
            }
        }
        fetchData()
    }, [])

    return(
        <div className="certBase">
            {
                isReady?
                <DataTable rows={rows} headers={headers}>
                {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                    <Table {...getTableProps()}>
                    <TableHead>
                        <TableRow>
                        {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })}>
                            <p style={{fontSize:"2vh"}}>{header.header}</p>
                            </TableHeader>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody style={{fontSize:"1.7vh"}}>
                        {rows.map((row) => (
                        <TableRow {...getRowProps({ row })}>
                            {row.cells.map((cell) => (
                                <TableCell key={cell.id}>{cell.value}</TableCell>
                            
                            ))}
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                )}
                </DataTable>:
                    <ReactLoading type={"spokes"} color={"white"} height={667} width={375} />
            }
            {isOpen && (
                <Lightbox
                    mainSrc={currentPictureLink}
                    onCloseRequest={() => setIsOpen(!isOpen)}
                />
            )}
        </div>
    )
}

export default App;