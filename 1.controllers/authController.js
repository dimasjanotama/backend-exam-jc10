const db = require('../database')


module.exports = {

    title : (req, res) => {
        res.send(`<h1> Ini Home Page </h1>`)
    },
    
    moviesdata : (req,res)=>{
        let sql = `SELECT * FROM movies`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },
    
    inputmovies : (req,res)=>{
        let sql = `INSERT INTO movies VALUES (0,'${req.body.nama}','${req.body.tahun}','${req.body.description}')`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    editmovies : (req,res)=>{
        let sql = `UPDATE movies SET nama='${req.body.editNama}', tahun='${req.body.editTahun}', description='${req.body.editDescription}'
        WHERE id=${req.body.editselectedId}`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    deletemovies : (req, res)=>{
        let sql = `DELETE FROM movies WHERE id = ${req.params.movieId}`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    moviecategories : (req,res)=>{
        let sql = `SELECT * FROM categories`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    inputcategories : (req,res)=>{
        let sql = `INSERT INTO categories VALUES (0,'${req.body.namaKategori}')`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    editcategories : (req,res)=>{
        let sql = `UPDATE categories SET nama='${req.body.editNamaKategori}' WHERE id=${req.body.editcategoryId}`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    deletecategories : (req, res)=>{
        var categoryId = req.params.categoryId
        let sql = `DELETE FROM categories WHERE id = '${categoryId}')`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    moviesdropdown : (req,res)=>{
        let sql = `SELECT id,nama FROM movies GROUP BY nama ORDER BY nama`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },

    categoriesdropdown : (req,res)=>{
        let sql = `SELECT id,nama FROM categories GROUP BY nama ORDER BY nama`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },

    inputconnection : (req,res)=>{
        let sql = `INSERT INTO movcat VALUES (0,'${req.body.inputMovieId}','${req.body.inputCategoryId}')`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    displayconnection : (req,res)=>{
        let sql = `SELECT movies.nama AS nama_movie, categories.nama AS nama_category FROM movcat 
            JOIN movies ON movcat.idmovie=movies.id JOIN categories ON movcat.idcategory=categories.id`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    },

    deleteconnection : (req, res)=>{
        var connectionId = req.params.connectionId
        let sql = `DELETE FROM movcat WHERE id = ${connectionId}`
        try {
            db.query(sql, (err, result)=>{
                if(err) throw err
                res.send(result)
            })    
        } catch (error) {
            console.log(error);
        }
    }



    


}