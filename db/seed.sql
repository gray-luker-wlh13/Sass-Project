CREATE TABLE my_users
(
  id SERIAL PRIMARY KEY,
  is_admin BOOLEAN default false,
  username VARCHAR(120),
  hash text
);

INSERT INTO my_users
(is_admin, username, hash)
VALUES
(true, 'Trogdor', '$2a$10$wZUxoi7vsBOeHK3zhiY4H.Nc5WvuyukqmsGjat9XMGl40w3/RhdiW'),
(true, 'Blackbeard', '$2a$10$KFR1RUO0JiFtCoux3mnJaemV6Ifnk0BOTdjm/VWh.uOZ97pD3X1Re'),
(false, 'Skallywag', '$2a$10$dgo.HRAecEhFl8L0h.lJM.OeM2t8y5Pi3AmiBlfCXUIIS/PUtfwd.');

CREATE TABLE these_posts
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_id INT
);

INSERT INTO these_posts 
(title, user_id)
VALUES
('post one', 1),
('post two', 2),
('post three', 3);