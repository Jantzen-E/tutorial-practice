import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <button className="btn">This is my button</button>
      <div className="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEXeACn////bAADeACX+9PbdABvdABXdAB//+/zqgorgKjzvp6vcAAndABL20NLmZ3H87u/0wsbkVmLsi5LgLUD86ez64OL1ycveACPzvMHlXGjdABjunaPeFi7wrLDrho7tlJriPk7oeIDjR1bnbnfys7jgKz7tmZ/429zpfIXkUF3fHjTjUl3vo6hmIV52AAAD00lEQVR4nO3b63qiOgCFYQgCdoRW6wmKoj1YO+3u/d/eGByVJKCdjCPS/b0/g09wmQAhiY4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXBlPUVH2z7+An8XRVuAn569/Pir74ZllxcdEjXhzLFNKlNrjsqAqXiZen2bpoJD2Fs8iVn7SoMy3CRi+uGXTaFPmL5Sy0eaU2bhfqbOKHX85KRlH5YCDkjTPjNMH2XqsnMztrD5KNSR57yAf2kQM75T6B0XCG6VMtmvs1kgjJ+gpJeVGFG7tIckTy6o6V9G+r6rnvY2cP/fVhF27hN3aQ/LczqS60v5o11jtThiO6ip13Wf/GyT05vUBXfc1aX9Cod1iVGPR+oTx+lhA153FLU/o+ccDuq7vtTthMDuVcJm1O+Hxq1CaiFYn9D5OBXRdxxhpXC7h+DBG6wVWCbXBovz2U73kIWkuoTrytkmYacO1t01VkTbCufGbS6i+4lgl1G409+HmtA9q2bDJhOoLzhna8H7zo4VawkWrE/rD0wkb7aUtTpgWt4+nEwlFtJO1LmF3++Z+IuH+tX26ztqWsMqxJ76c9SAhCUlIQhKSkIQkJOG1J7xtXcJJL8/znjplYiacH3htSzgQQRyLnycShsoCccsSfvs34GtLGOb5pdaAzz0TpSX8Tya8NxOeYx3fJmGQ+TvJeWYTn2LHiW60skOgv9kQYpXwZm/xnhgJS5sy9IRBVvCdTF9bexDiTnsi3f+elvWF/zoXke0+lL9dt/g0ZvWnt78JI+F6trXMfPV2vdE1zjAvGi4RQzkX3hk86/scLpRwZiTcMxPu9EXyWFPfwXYVOHjeT4ulwqqvNpJw8+VrK9zL5SKwMtN/a9WKTSWMBqcSPiZyN4NSlDexfmheh19LqD/8DG/FAulKLfyw6KdNtaEjanYL7cgnpLEVa2buG7vehMn70YAD2YTGZ2yuxMYSOiI/ErCTyf7oP2nF/QYS2l6HMuJbfcLH4vlurIWP25XQi2svxfftgM14ak4tbqbN9VK5+dLYnVDo7Lcmir56ZGEx9v7HbVh9ZN/ZhH6hSat4PwTVXkG6ds/DbuegmxYDiZ9KmdwjHPQ7lbrrzMk+u5XHvpDQ8YNP7bcbPJYHZ+oz5cXu9cnYti1H82XFCev2eReLwNWHitqrHTJ4cfSS7vZHdaZDRyjvEJ5T6qdLy7F348JYZB9yF30oIl8ftCRBuot/Z9NHr0b9/x48MVrfjifpiwgv/aUuxpP/doi/bz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/9gvbgm7NNhQqJQAAAABJRU5ErkJggg==" alt=""/>
      </div>
      <h1>Scss practice</h1>
      <h2>basics of scss</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
        in culpa qui officia deserunt mollit anim id est laborum.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.  Curabitur pretium tincidunt lacus. Nulla gravida orci 
        a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis 
        sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate 
        vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros 
        est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. 
        Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. 
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget 
        erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, 
        laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac 
        habitasse platea dictumst.
      </blockquote>
      <a>This is my anchor tag</a>
      <p className="roundedBox">paragraph</p>
      <p>another paragraph</p>
      <p className="box">another paragraph</p>
      <ul>
        <li>css</li>
        <li>scss</li>
        <li>imports</li>
      </ul>
    </div>
  );
}

export default App;