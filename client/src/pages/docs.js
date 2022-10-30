import React from "react";
import Sidebar from "./components/sidebar";
const Docs = () => {
    const sentence1 = "{'sentence':i}";
    return (
        <>
        <Sidebar/>
        <div className="Body1">
        <br/><br/>
        <h1>Docs</h1>

        <div class="container my-4" >

<p>I know some of you know how <code className="code">SOAP / DOS</code> requests work. </p>
<br/>
<p>So I have prepared a script of python to automate your queries. [Do not modify timer and method or else your request might identify as a DDOS request and your IP will be banned.]</p>
<p>- You will need <code className="code">Requests</code> module to make this python script work.</p>
<p>- Press <code className="code">Windows key+ R</code> → Type <code className="code">cmd</code> → Type "pip install requests". You should be good to go now.</p>
<h2>Put your questions in the question list and initiate requests.</h2>

<div class="codeStruct">

<code className="code">import requests,time;</code><br/><br/>
<code className="code">questionList = [</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;"আমি ভাত খাই",</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;"আজ স্কুল বন্ধ",</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;"আজ ছুটির দিন",</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;"এখন বৃষ্টি হচ্ছে"</code><br/>
<code className="code">]</code><br/>
<code className="code">for i in questionList:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;try:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictToSend = {sentence1};</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = requests.post('https://connecteen-node-002.herokuapp.com/recieve', json=dictToSend);</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictFromServer = res.json();</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;except:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)</code><br/>

</div>
<br/><br/>
<p>This might look hell of a work you are submitting questions one by one. So,</p>
<p>If you have a notepad file with texts, you may use this python script to post data. [I hope you did your 221 well.]</p>
<h2>Put your questions in notepad file and initiate requests.</h2>

<div class="codeStruct1">

<code className="code">import requests,time;</code><br/><br/>

<code className="code">def purify(array):</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;ret_array = []; </code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for i in array:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ret_array.append(i[0:len(i)-2]);</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;return ret_array;</code><br/><br/>

<code className="code">def requester(questionList):</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for i in questionList:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictToSend = {sentence1};</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = requests.post('https://connecteen-node-002.herokuapp.com/recieve', json=dictToSend);</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictFromServer = res.json();</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("array number {} sent".format(questionList.index(i)))</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:</code><br/>
<code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)</code><br/><br/>
        
<code className="code">file1 = open("text.txt","r+") ### file name here</code><br/>
<code className="code">questionList = purify(file1.readlines())</code><br/><br/>

<code className="code">requester(questionList)</code>
</div>
</div>


            
        </div>
        </>
    );
    }

export default Docs;