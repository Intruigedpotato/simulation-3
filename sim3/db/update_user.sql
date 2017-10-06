UPDATE users 
SET first_name $1,
last_name $2,
eye_color $3,
hair_color $4,
gender $5,
hobby $6,
birthdate $7
 WHERE id = $1;