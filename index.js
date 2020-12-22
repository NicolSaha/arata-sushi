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
