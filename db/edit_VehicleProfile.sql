UPDATE vehicle_profiles
SET title = $1,	price = $2,	vehicle_type = $3,	manufacturers = $4,	userid = $5
WHERE vehicle_profileid = $6;