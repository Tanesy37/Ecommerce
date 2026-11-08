using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(option => option.UseSqlite(builder.Configuration.GetConnectionString("ConnectionStringSqllite")));
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.


app.MapControllers();
DbInitializer.InitDb(app);
app.UseCors((opt) =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});
app.Run();
