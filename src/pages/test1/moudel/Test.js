import React, {Component,useEffect,useState} from 'react';
import  {TestPost} from './../axios/axiosRequest';
import {Consumer} from './../index';

export default function Test(){
        const  [count,setCount] = useState(0);

        return  (
            <>
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            </>
        )
      }