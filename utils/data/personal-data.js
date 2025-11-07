// Deprecated static export; replaced by runtime fetch helper
export async function getPersonalData() {
  try {
    if (typeof window === 'undefined') {
      // server-side: use native fs for faster reads (optional), fallback to fetch
      const res = await fetch('http://localhost:3000/personal-data.json');
      if (!res.ok) throw new Error('Failed to fetch personal-data.json');
      return await res.json();
    } else {
      const res = await fetch('/personal-data.json');
      if (!res.ok) throw new Error('Failed to fetch personal-data.json');
      return await res.json();
    }
  } catch (err) {
    console.error('getPersonalData error:', err);
    return null;
  }
}

// For backward-compatibility export a default object placeholder (used at build-time only)
export const personalData = {
  name: 'JAGADEESH GANTA',
  profile: '/profile.png',
  designation: 'Software Developer',
  description: "My name is JAGADEESH GANTA. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
  email: 'jagadeeshganta7@gmail.com',
  phone: '+91 8331843306',
  address: 'Hyderabad, India',
  // Social links set to disabled placeholders so clicks do nothing until you update them.
  github: 'javascript:void(0)',
  facebook: 'javascript:void(0)',
  linkedIn: 'javascript:void(0)',
  twitter: 'javascript:void(0)',
  stackOverflow: 'javascript:void(0)',
  leetcode: 'javascript:void(0)',
  devUsername: "",
  resume: "https://drive.google.com/file/d/1CUSIsJ_HTvxxx4qpZMv1Nxz24XWWrpOZ/view?usp=sharing"
}