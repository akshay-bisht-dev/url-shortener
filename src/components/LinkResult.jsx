import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`https://api-ssl.bitly.com/v4/shorten`, {
                long_url: inputValue
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 5d81123d95d5ebe1a948c6e402bf9098054c600a'
                }
            });
            const result = response.data;
            if (result.link) {
                setShortenLink(result.link);
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className='result_div'>
                        <p>{shortenLink}</p>
                        {
                            copied ? (
                                <button className='copy_btn'>Copied!</button>
                            ) : (
                                <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                                    <button className='copy_btn'>Copy to Clipboard</button>
                                </CopyToClipboard>
                            )
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default LinkResult;
