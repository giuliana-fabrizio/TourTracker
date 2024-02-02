insert into client (firstname, name, email, gender, city_id) values
('Jarod', 'Kohler', 'kohlerjarod2004@gmail.com', 'Masculin', 8607, '123456789'),
('Mathéo', 'Girard', 'matheogigi28@gmail.com', 'Masculin', 10209, '123456789'),
('Raphael', 'Dany', 'raphael.dany@edu.univ-fcomte.fr', 'Masculin', 27406, '123456789'),
('Simone', 'Nguyen', 'simon.nguyen@edu.univ-fcomte.fr', 'Féminin', 28138, '123456789');

insert into travel (lifetime, comment, score, client_id, city_id) values
(15, 'Ville exceptionnelle', 5, 1, 4420), -- Marseille
(10, 'Ville confortable, y fait bon vivre', 4.5, 1, 27116), -- Strasbourg
(20, 'Pleut tout le temps', 2, 2, 18557), -- Saint-Vaast-la-Hougue
(12, 'Ville magique !', 4.5, 2, 29900), -- Paris
(7, 'Endroit perdu', 3, 3, 8310), -- Nabirat
(5, 'Très bonne destination pour les vacances', 4, 4, 25521); -- Bayonne

insert into activity (label, description, phone, place, travel_id) values
-- Activités pour Marseille
('Vieux-Port', 'Profitez d''une promenade pittoresque et de délicieux fruits de mer au vieux port de Marseille.', '06 12 34 56 78', 'Quai des Belges, 13001 Marseille', 1),
('Musée d''Histoire de Marseille', 'Découvrez l''histoire fascinante de la ville au Musée d''Histoire de Marseille.', '06 23 45 67 89', 'Centre Bourse, 2 Rue Henri Barbusse, 13001 Marseille', 1),
('Calanques de Marseille', 'Explorez les magnifiques calanques naturelles pour une expérience de randonnée unique.', '06 34 56 78 90', 'Départ depuis Luminy, 13009 Marseille', 1),
-- Activités pour Strasbourg
('Cathédrale Notre-Dame de Strasbourg', 'Visitez cette magnifique cathédrale gothique au cœur de la ville.', '03 23 45 67 89', 'Place de la Cathédrale, 67000 Strasbourg', 2),
('Parc de l''Orangerie', 'Profitez d''une journée tranquille dans ce grand parc avec un lac pittoresque.', '03 45 67 89 01', '67000 Strasbourg', 2),
('La Petite France', 'Plongez dans l''atmosphère charmante du quartier historique de La Petite France.', '03 12 34 56 78', '67000 Strasbourg', 2),
('Musée d''Art Moderne et Contemporain', 'Explorez des œuvres d''art contemporain et moderne au Musée d''Art Moderne et Contemporain.', '03 34 56 78 90', '1 Place Hans Jean Arp, 67000 Strasbourg', 2),
-- Activités pour Saint-Vaast-la-Hougue
('Fort de la Hougue', 'Explorez le magnifique Fort de la Hougue et son histoire militaire.', '02 12 34 56 78', '50550 Saint-Vaast-la-Hougue', 3),
-- Activités pour Paris
('Tour Eiffel', 'Admirez la vue spectaculaire de Paris depuis la Tour Eiffel.', '01 23 45 67 89', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', 4),
('Musée du Louvre', 'Explorez l''une des plus grandes collections d''art du monde au Musée du Louvre.', '01 34 56 78 90', 'Rue de Rivoli, 75001 Paris', 4),
('Montmartre', 'Promenez-vous dans le quartier artistique de Montmartre et visitez la Basilique du Sacré-Cœur.', '01 45 67 89 01', '75018 Paris', 4),
-- Activités pour Nabirat
('Grotte de Lascaux', 'Découvrez les peintures rupestres préhistoriques à la Grotte de Lascaux.', '05 12 34 56 78', '24290 Montignac', 5),
-- Activités pour Bayonne
('Musée Basque', 'Plongez dans la culture basque au Musée Basque.', '05 23 45 67 89', '37 Quai des Corsaires, 64100 Bayonne', 6),
('Cathédrale Sainte-Marie de Bayonne', 'Visitez la magnifique cathédrale gothique de Bayonne.', '05 34 56 78 90', 'Place de la Liberté, 64100 Bayonne', 6),
('Les Halles de Bayonne', 'Dégustez des produits locaux au marché couvert des Halles de Bayonne.', '05 45 67 89 01', '1 Rue des Halles, 64100 Bayonne', 6);
