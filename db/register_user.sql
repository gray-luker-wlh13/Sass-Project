INSERT INTO my_users
(is_admin, username, hash)
VALUES
($1, $2, $3)
returning *;