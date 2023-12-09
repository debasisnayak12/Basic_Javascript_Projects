const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please provide valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    if(bmi < 18.6){
      first.style.backgroundColor = "#fff";
    }else if(bmi > 18.6 && bmi < 24.9){
      second.style.backgroundColor = "#fff";
    }else{
      third.style.backgroundColor = "#fff";
    }
  }

});
