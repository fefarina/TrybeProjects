DELIMITER $$

CREATE TRIGGER trigger_usuario_delete

BEFORE DELETE ON SpotifyClone.usuarios
FOR EACH ROW
BEGIN
  DELETE FROM SpotifyClone.usuario_segue_artista WHERE usuario_id = OLD.id;
  DELETE FROM SpotifyClone.usuario_ouve_cancao WHERE usuario_id = OLD.id;
END $$

DELIMITER ;
