import React, { Component } from 'react';
import Layout from './Layout';

const Home = () => (
    <div>
        <Layout title='Home Page' className='container'>
            <img style={{
                width: '110px',
                height: '110px'
            }} src="./assets/gif/coffee.gif" className="rounded-circle mt-2 mb-2 mx-auto d-block" alt="coffee" />
            <div style={{ marginRight: '10%', marginLeft: '10%' }}>
                <h1 style={{ textAlign: 'left' }}>Md.DILSAHDUL ISLAM</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#1e1b1d" d="m5.944 121.145l-1.824-.161c-1.437-.116-1.992-.696-1.992-1.672c0-1.16.878-1.88 2.544-1.88c1.181 0 2.225.28 3.034.905l1.087-1.09c-1.02-.834-2.477-1.229-4.096-1.229c-2.43 0-4.186 1.253-4.186 3.342c0 1.88 1.18 2.875 3.4 3.06l1.876.166c1.314.116 1.896.673 1.896 1.672c0 1.347-1.158 2.018-3.034 2.018c-1.41 0-2.635-.371-3.539-1.324L0 126.067c1.249 1.208 2.753 1.647 4.672 1.647c2.754 0 4.626-1.276 4.626-3.48c0-2.137-1.363-2.902-3.354-3.089zm14.247-5.126c-1.829 0-2.977.359-3.984 1.638c-.017.02 1.09 1.098 1.09 1.098c.67-.951 1.413-1.3 2.871-1.3c2.081 0 2.914.834 2.914 2.505v1.094H19.66c-2.544 0-3.934 1.3-3.934 3.295a3.306 3.306 0 0 0 .857 2.322c.718.743 1.643 1.042 3.215 1.042c1.528 0 2.361-.3 3.286-1.228v1.09h1.667v-7.753c0-2.48-1.505-3.804-4.559-3.804zm2.892 7.52c0 .951-.186 1.6-.576 1.972c-.72.697-1.577.765-2.548.765c-1.806 0-2.615-.624-2.615-1.947s.833-2.019 2.548-2.019h3.19zm8.192-6.036c1.085 0 1.757.324 2.61 1.276c0 0 1.118-1.086 1.11-1.098c-1.17-1.251-2.16-1.663-3.72-1.663c-2.872 0-5.044 1.952-5.044 5.85c0 3.898 2.172 5.85 5.044 5.85c1.572 0 2.567-.419 3.748-1.695l-1.134-1.094c-.857.952-1.529 1.3-2.614 1.3a3.076 3.076 0 0 1-2.64-1.3c-.532-.742-.738-1.624-.738-3.06c0-1.442.206-2.323.738-3.066a3.076 3.076 0 0 1 2.64-1.3zm14.267-1.363h-2.078l-5.163 5.04l.008-10.13h-1.666v16.525h1.666l-.008-4.167l2.022-2.034l3.816 6.201h2.062l-4.724-7.358zm7.693-.28c-1.706 0-2.86.668-3.567 1.422c-1.041 1.091-1.311 2.401-1.311 4.495c0 2.114.269 3.424 1.311 4.515c.708.755 1.86 1.422 3.567 1.422c1.71 0 2.883-.667 3.594-1.422c1.044-1.09 1.307-2.401 1.307-4.515c0-2.093-.263-3.405-1.307-4.495c-.71-.754-1.884-1.422-3.594-1.422zm1.355 8.742c-.364.35-.853.532-1.355.51a1.754 1.754 0 0 1-1.327-.51c-.6-.601-.668-1.624-.668-2.825c0-1.2.067-2.204.668-2.804a1.77 1.77 0 0 1 1.327-.51c.502-.023.991.159 1.355.51c.597.6.664 1.603.664 2.804c0 1.2-.068 2.224-.664 2.825zm11.22-8.611l-2.325 7.165l-2.35-7.165h-3.038l4.258 11.588h2.26l4.233-11.588zm7.944-.13c-2.994 0-5.032 2.133-5.032 5.916c0 4.692 2.615 5.936 5.344 5.936c2.082 0 3.215-.643 4.388-1.824l-1.749-1.71c-.735.734-1.355 1.09-2.619 1.09c-1.62 0-2.528-1.09-2.528-2.584h7.228v-1.287c0-3.18-1.817-5.538-5.032-5.538zm-2.196 4.846a3.145 3.145 0 0 1 .268-1.244a2.152 2.152 0 0 1 1.928-1.201c.817 0 1.565.466 1.928 1.201c.174.39.265.817.269 1.244zm11.482-3.602v-1.114h-2.816v11.588h2.883v-6.983c0-1.469.976-2.137 1.861-2.137a1.892 1.892 0 0 1 1.52.683l2.184-2.192c-.797-.802-1.596-1.09-2.73-1.09a3.895 3.895 0 0 0-2.901 1.244zm6.525-2.323v12.785h2.883v-9.135h2.129v-2.2h-2.129v-1.269c0-.667.332-1.046 1.02-1.046h1.109v-2.45h-1.643c-2.35 0-3.37 1.672-3.37 3.315zm16.878 1.074c-1.707 0-2.86.668-3.57 1.426c-1.04 1.091-1.308 2.401-1.308 4.491c0 2.114.268 3.424 1.307 4.52c.711.753 1.864 1.42 3.57 1.42c1.706 0 2.883-.666 3.594-1.42c1.04-1.092 1.308-2.407 1.308-4.52c0-2.09-.268-3.4-1.308-4.49c-.71-.758-1.888-1.426-3.593-1.426zm1.354 8.746a1.843 1.843 0 0 1-1.354.51a1.784 1.784 0 0 1-1.332-.51c-.597-.605-.663-1.628-.663-2.829c0-1.2.067-2.2.663-2.8a1.772 1.772 0 0 1 1.332-.514c.501-.023.99.162 1.354.514c.597.6.664 1.6.664 2.8c0 1.2-.068 2.224-.664 2.829zm17.166-8.611l-1.865 7.165l-2.373-7.165h-2.105l-2.35 7.165l-1.86-7.165h-3.062l3.547 11.588h2.374l2.416-7.27l2.418 7.27h2.37L128 115.991Zm-26.135 8.097v-12.62h-2.88v12.798c0 1.647.995 3.313 3.369 3.313h1.64v-2.445H99.85c-.73 0-1.02-.355-1.02-1.046zm-84.909-6.135l1.54-1.544h-3.151v-3.76H10.64v11.86c0 1.696.97 3.066 2.915 3.066h1.181v-1.438h-.881c-1.062 0-1.547-.626-1.547-1.67v-6.514zm0 0" /><path fill="#bbb" d="M89.376 62.392h8.507v34.245h-76.59V62.392h8.512v25.686h59.57zm0 0" /><path fill="#f58025" d="m39.08 59.85l41.796 8.835l1.757-8.406l-41.796-8.84Zm5.528-20.132l38.72 18.136l3.607-7.788l-38.72-18.138Zm10.716-19.11l32.824 27.494l5.466-6.6l-32.821-27.498zM76.511.282L69.654 5.41l25.491 34.477L102 34.76ZM38.317 79.515h42.547v-8.56H38.317Zm0 0" /></svg>
                <h6 style={{ textAlign: 'right' }}>I am a self taught MERN stack developer.</h6>
                <p style={{ color: 'grey', textAlign: 'justify' }}> I can code well in javascript(ES6) and create website on full stack level. I can develop backend api using nodejs and use React,Bootstrap,Reactstrap for frontend development. I know Relational Database and SQL quiries(Joining table,CRUD) well. I have used RDMS(Relational Database Management System) like Mongodb,Mysql,Oracle. But for most of my web-projects I prefer MongoDB and Mysql. I also have decent knowledge in programming languages like C,C++,Python and Java. I solved over 100 problems on Graph Algorithm, Number Theory, Strings, Ad-Hoc and implementaion problems in <a href='https://codeforces.com/profile/mddilshad'>Codeforces</a> and <a href="https://uhunt.onlinejudge.org/id/1027214">UVA.</a></p>

            </div>

        </Layout >
    </div >
)

export default Home;