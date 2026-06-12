const country = 'India';

try {
    country = 'Sri Lanka';
} catch (error) {
    console.log(error.message);
}