import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const MarkDown = ({fileName}) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        async function getContent() {
            const res = await fetch(`/markdown/${fileName}.md`);
            const text = await res.text();
            setContent(text);
        }
        getContent();
    }, [fileName]);

    return (
        <div  className="non_flickering">
            {content ? (
                <Markdown style={{"padding":"10px"}} className="non_flickering">{content}</Markdown>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default MarkDown;
