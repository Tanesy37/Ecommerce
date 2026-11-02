using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(StoreContext storeContext) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await storeContext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetSingleProduct(int id)
        {
            var product = await storeContext.Products.FindAsync(id);
            if (product == null) return NotFound("Product not found");

            return Ok(product);
        }

        [HttpPost]
        public ActionResult<List<Product>> CreateProduct()
        {
            return storeContext.Products.ToList();
        }




    }
}
