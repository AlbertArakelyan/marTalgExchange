/**** Burger menu ****/
try {
  const $burgerMenuToggler = document.querySelector('.header__burgerMenu_toggler');
  const $burgerMenu = document.querySelector('.header__burgerMenu');


  $burgerMenuToggler.addEventListener('click', () => {
    $burgerMenu.classList.toggle('collapsed');
  });
} catch (e) {

}




/**** Login modal ****/
try {
  const $loginBtn = document.querySelector('.header__loginReg_login');
  const $loginModal = document.querySelector('.login-modal');

  $loginBtn.addEventListener('click', () => {
    $loginModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

  window.addEventListener('click', (e) => {
    if (e.target === $loginModal) {
      $loginModal.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  })

  const $loginModalCloseBtn = document.querySelector('.modal-content__close');
  $loginModalCloseBtn.addEventListener('click', () => {
    $loginModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
} catch (e) {

}



/**** My account nav ****/
try {
  const $myAccountBtn = document.querySelector('.header__myAccount_btn');
  const $myAccountNav = document.querySelector('.myAccount__nav');

  $myAccountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    $myAccountNav.classList.toggle('show');
    $myAccountBtn.classList.toggle('show');
  });

  window.addEventListener('click', () => {
    if ($myAccountNav.classList.contains('show')) {
      $myAccountBtn.classList.remove('show');
      $myAccountNav.classList.remove('show');
    }
  });
} catch (e) {

}


/***** Contact *****/
try {
  // const $sendModal = document.querySelector('.contact__form_submit');
  // const $messageModal = document.querySelector('.message-modal');

  // $sendModal.addEventListener('click' , (e) => {
  //   e.preventDefault();
  //   $messageModal.classList.remove('hidden');
  // });

  // window.addEventListener('click', (e) => {
  //   if(e.target === $messageModal) {
  //     $messageModal.classList.add('hidden');
  //   }
  // })

  const contactForm = document.querySelector('.contact__form');
  const contactFormInputs = document.querySelectorAll('.contact__form input, .contact__form textarea');

  const question = {
    name: '',
    email: '',
    topic: '',
    message: '',
    numbers: ''
  };

  contactFormInputs.forEach((elem) => {
    elem.addEventListener('change', (e) => {
      const { name, value } = e.target;
      question[name] = value;
    });
  });

  function clearFields() {
    contactFormInputs.forEach((elem) => {
      elem.value = '';
    });

    for (let key in question) {
      question[key] = '';
    }
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const { name, email, topic, message, numbers } = question;

    if (name && email && topic && message && numbers) {
      window.location.href = 'contact-sent.html';
      clearFields();
    } else {
      window.location.href = 'contact-failed.html';
      clearFields();
    }

  })

} catch (e) {

}


/**** Feedbacks ****/
try {

  // const $sendModal = document.querySelector('.feedbacks__form form button');
  // const $messageModal = document.querySelector('.message-modal');

  // $sendModal.addEventListener('click' , (e) => {
  //   e.preventDefault();
  //   $messageModal.classList.remove('hidden');
  // });

  // window.addEventListener('click', (e) => {
  //   if(e.target === $messageModal) {
  //     $messageModal.classList.add('hidden');
  //   }
  // })

  const feedback = {
    name: '',
    comment: '',
    number: ''
  };

  const feedbackForm = document.querySelector('.feedbacks__form form');
  const feedbackFormInputs = document.querySelectorAll('.feedbacks__form form input, .feedbacks__form form textarea');

  feedbackFormInputs.forEach((elem) => {
    elem.addEventListener('change', (e) => {
      const { name, value } = e.target;

      feedback[name] = value;
    })
  })

  function clearValue() {
    feedbackFormInputs.forEach((elem) => {
      elem.value = '';
    });

    for (let key in feedback) {
      feedback[key] = '';
    }
  }

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { name, comment, number } = feedback;
    if (name.length && comment.length && number.length) {
      window.location.href = 'feedback-sent.html';
      clearValue();
    } else {
      window.location.href = 'feedback-failed.html';
      clearValue();
    }
  });

} catch (e) {

}


/**** Tariffs table - routing ****/
try {
  const $tariffs = document.querySelectorAll('.href-row');

  $tariffs.forEach((tariff) => {
    tariff.addEventListener('click', () => {
      location.href = 'exchange.html';
    });
  });
} catch (e) {

}


/**** exchange page - form submit ****/
try {
  const $continueBtn = document.querySelector('.requestForm__buttons_next');

  $continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = 'exchange-confirm.html';
  });
} catch (e) {

}


/**** Exchange confirm - create requset ****/
try {

} catch (e) {

}