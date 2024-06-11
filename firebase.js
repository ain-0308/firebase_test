// console.log('firebase file');

// Firebase 설정 객체 : 내 firebase에 대한 정보
const firebaseConfig = {
    apiKey: "AIzaSyBv0GEb0tF-pRwKQQL4zv23puP4dThLkXQ",
    authDomain: "fir-test-12a8f.firebaseapp.com",
    databaseURL: "https://fir-test-12a8f-default-rtdb.firebaseio.com",
    projectId: "fir-test-12a8f",
    storageBucket: "fir-test-12a8f.appspot.com",
    messagingSenderId: "742608867795",
    appId: "1:742608867795:web:360c7a2001f29795e9df26"
};

// Firebase 앱 초기화 : 앱 초기화 할 수 있도록 사용
const app = firebase.initializeApp(firebaseConfig);

// Firebase 의 실시간 데이터 베이스
const database = firebase.database(); 

// firebase()에 데이터 쓰기
// ⭐매개변수 부분⭐
const writeUserData = ( userId, name, email )=>{
    firebase.database().ref( 'users/' + userId ).set({
        name : name,
        email : email
    });
};

// Firebase에 있는 데이터 읽기
const readUserData = ( userId ) => {
    const userRdf = firebase.database().ref('users/'); // 'users/' 라는 경로의 참조를 가져옴

    userRdf.once('value').then((res)=>{
        const data = res.val();
        console.log(data);
    });

};

/* Mission
    1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
    2. 사용자가 input 에 입력한 세개의 데이터를 각각 console창에 찍어보기
    3. JS실전폴더 -> ex04참고
*/

// ⭐⭐이해하기
let btn = document.getElementById( 'addUserBtn' );
let frm = document.frm.elements // form태그안에 요소들을 가져옴 이때 배열로 가져옴

btn.addEventListener('click', ()=>{
    console.log( frm[0].value );//해당 배열 값을 출력
    console.log( frm[1].value );
    console.log( frm[2].value );
    writeUserData( frm[0].value, frm[2].value, frm[1].value );
})
let getUserBtn = document.getElementById('getUserBtn');
getUserBtn.addEventListener('click', ()=>{
    console.log('유저가져오기 ck');
    readUserData('abc');
});