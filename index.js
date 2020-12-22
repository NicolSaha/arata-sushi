//FORM BUTTON
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
formbutton('create', {
  action: 'https://formspree.io/f/xleoojel',

  title: 'Bestel Hier!',
  description: 'We contacteren u zo spoedig mogelijk.',

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Naam',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'Message',
      type: 'textarea',
      label: 'Bericht',
    },
    {
      type: 'submit',
    },
  ],
  styles: {
    fontFamily: '"Lato", sans-serif',
    button: {
      background: '#F43F5E',
    },
    title: {
      background: '#F43F5E',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontWeight: '800',
    },
    description: {
      background: '#F43F5E',
      letterSpacing: '0.05em',
    },
    body: {
      background: '#ffffff',
      letterSpacing: '0.05em',
    },
    input: {
      border: 'solid',
      borderColor: 'rgba(241, 245, 249, 0.9)',
      borderRadius: '5px',
      letterSpacing: '0.05em',
    },
  },
});

//MOBILE MENU
const mainMenu = document.getElementById('main-menu');
const mobileMenu = document.getElementById('mobile-menu');
mainMenu.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden', 'opacity-0', 'scale-95');
  mobileMenu.classList.add('opacity-100', 'scale-100');
});

const exitMobileMenu = document.getElementById('exit-mobile-menu');
exitMobileMenu.addEventListener('click', function () {
  mobileMenu.classList.add('hidden', 'opacity-0', 'scale-95');
  mobileMenu.classList.remove('opacity-100', 'scale-100');
});

//PRIVACY POLICY
let agreeState = 0;
const privacyPolicy = document.querySelector('#privacy-policy-btn');
const privacyPolicyToggle = document.getElementById('privacy-policy-toggle');

privacyPolicy.addEventListener('click', function () {
  if (agreeState == 0) {
    privacyPolicyToggle.classList.remove('translate-x-0');
    privacyPolicyToggle.classList.add('translate-x-5');
    privacyPolicy.classList.remove('bg-blue-gray-200');
    privacyPolicy.classList.add('bg-rose-500');
    agreeState = 1;
  } else {
    privacyPolicyToggle.classList.add('translate-x-0');
    privacyPolicyToggle.classList.remove('translate-x-5');
    privacyPolicy.classList.add('bg-blue-gray-200');
    privacyPolicy.classList.remove('bg-rose-500');
    agreeState = 0;
  }
});
